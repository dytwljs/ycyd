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

    const model = this.model('goods');
//    const data = await model.where({name: ['like', `%${name}%`]}).order(['id DESC']).page(page, size).countSelect();
const data = await model.field(['nideshop_category.name as category_name','nideshop_goods.*']).join('nideshop_category ON nideshop_goods.category_id=nideshop_category.id').where({'nideshop_goods.name': ['like', `%${name}%`]}).order(['nideshop_goods.category_id DESC']).page(page, size).countSelect();
 
    //const attribute = await this.model('goods_attribute').field('nideshop_goods_attribute.value, nideshop_attribute.name').join('nideshop_attribute ON nideshop_goods_attribute.attribute_id=nideshop_attribute.id').order({'nideshop_goods_attribute.id': 'asc'}).where({'nideshop_goods_attribute.goods_id': goodsId}).select();
    // console.log('..........');
    console.log(this.ctx.origin);
    // console.log('..........');
    
    return this.success(data);
  }

  async infoAction() {
    const id = this.get('id');
    const model = this.model('goods');
    const data = await model.where({id: id}).find();

    return this.success(data);
  }

  async storeAction() {
    if (!this.isPost) {
      return false;
    }

    const values = this.post();
    const id = this.post('id');

    const model = this.model('goods');
    values.is_on_sale = values.is_on_sale ? 1 : 0;
    values.is_new = values.is_new ? 1 : 0;
    values.is_hot = values.is_hot ? 1 : 0;
    if (id > 0) {
      await model.where({id: id}).update(values);
    } else {
      //delete values.id;
      // await model.add(values);
      //g_mod
      values.id=values.goods_sn>>0;
      const modelProduct =this.model('product');
      await model.add(values);
      var valuesProduct={
        goods_id:values.id
        ,goods_sn:values.goods_sn
        ,retail_price:values.retail_price
      };
      await modelProduct.add(valuesProduct);
    }
    return this.success(values);
  }

  async destoryAction() {
    const id = this.post('id');
    await this.model('goods').where({id: id}).limit(1).delete();
    // TODO 删除图片

    return this.success();
  }
  async getAllCategoryAction(){
    const model   =this.model('category');
      const data=await model.select();

      return this.success(data);
  }
};
