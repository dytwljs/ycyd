const Base = require('./base.js');

module.exports = class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction() {
    const page = this.get('page') || 1;
    const size = this.get('size') || 10;
    const name = this.get('name') || '';

    const model = this.model('sale');
    const dataLayer2    =await model.where({layer:1}).select();
    const data = await model.where({name: ['like', `%${name}%`]}).order(['id DESC']).page(page, size).countSelect();
    const saleList=[];
    dataLayer2.map( (item)=>{
        var isAdd=false;
        data.data.map((child)=>{
            if(child.parent_id==item.id){
                if(!isAdd){
                    saleList.push(item);
                    isAdd=true;
                }
                if(child.id!=item.id)
                    saleList.push(child);
            }
        });
});
    console.log(this.ctx.origin);
    return this.success(saleList);
  }

  async infoAction() {
    const id = this.get('id');
    const model = this.model('sale');
    const data = await model.where({id: id}).find();

    return this.success(data);
  }

  async storeAction() {
    if (!this.isPost) {
      return false;
    }

    const values = this.post();
    const id = this.post('id');

    const model = this.model('sale');
    // values.is_on_sale = values.is_on_sale ? 1 : 0;
    // values.is_new = values.is_new ? 1 : 0;
    // values.is_hot = values.is_hot ? 1 : 0;
    if (id > 0) {
      await model.where({id: id}).update(values);
    } else {
      //delete values.id;
      // await model.add(values);
      //g_mod
     // values.id=values.goods_sn>>0;
      await model.add(values);
    }
    return this.success(values);
  }

  async destoryAction() {
    const id = this.post('id');
    await this.model('sale').where({id: id}).limit(1).delete();
    // TODO 删除图片
    return this.success();
  }
  async getAllCategoryAction(){
    const model   =this.model('sale');
      const data=await model.select();

      return this.success(data);
  }

  async topSaleAction() {
    const model = this.model('sale');
    const data = await model.where({layer: 2}).order(['id ASC']).select();
    return this.success(data);
  }
};
