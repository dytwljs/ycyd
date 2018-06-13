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
<<<<<<< HEAD
    const dataLayer2 = await model.where({
      layer: 2
    }).select();
    // const dataLayer2    =await model.where({layer:{'>',1}}).select();
    const data = await model.where({
      name: ['like', `%${name}%`]
    }).order(['id DESC']).page(page, size).countSelect();
    // const saleList = [];
    // dataLayer2.map((item) => {
    //   var isAdd = false;
    //   data.data.map((child) => {
    //     if (child.id == item.id || child.parent_id == item.id) {
    //       if (!isAdd) {
    //         saleList.push(item);
    //         isAdd = true;
    //       }
    //       if (child.parent_id == item.id)
    //         saleList.push(child);
    //     }
    //   });
    });
    console.log(this.ctx.origin);
    return this.success(data);
=======
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
>>>>>>> 4e4a5e221fba2e65e6cad7c7d841b5070b9a6179
  }

  async infoAction() {
    const id = this.get('id');
    const model = this.model('sale');
<<<<<<< HEAD
    const data = await model.where({
      id: id
    }).find();
=======
    const data = await model.where({id: id}).find();
>>>>>>> 4e4a5e221fba2e65e6cad7c7d841b5070b9a6179

    return this.success(data);
  }

  async storeAction() {
    if (!this.isPost) {
      return false;
    }
<<<<<<< HEAD
    // console.log(this.DBERR);
    const values = this.post();
    const id = this.post('id');
    const isRecordNew = this.post('isRecordNew');

    const model = this.model('sale');
    var result;
    if (isRecordNew)
      result = await model.thenAdd(values, {
        id: 0
      });
    else
      result = await model.where({
        id: id
      }).update(values);
    return this.DAReturn(result, values);
    // return this.fail(this.DBERR.ERR_INSERT_EXIST_CODE,this.DBERR.ERR_INSERT_EXIST_MSG,result);
    // return this.success(result);
=======

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
>>>>>>> 4e4a5e221fba2e65e6cad7c7d841b5070b9a6179
  }

  async destoryAction() {
    const id = this.post('id');
<<<<<<< HEAD
    await this.model('sale').where({
      id: id
    }).limit(1).delete();
    // TODO 删除图片
    return this.success();
  }
  async getAllCategoryAction() {
    const model = this.model('sale');
    const data = await model.select();

    return this.success(data);
  }
  /**
   * 取得二级经销商
   */
  async parentSaleAction() {
    const model = this.model('sale');
    // const data = await model.where({layer: 2}).order(['id ASC']).select();
    // const data = await model.where({layer: {1,2}}).order(['id ASC']).select();
    const data = await model.where({
      layer: ['<', 3]
    }).order(['id ASC']).select();

    return this.success(data);
  }
};
=======
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
>>>>>>> 4e4a5e221fba2e65e6cad7c7d841b5070b9a6179
