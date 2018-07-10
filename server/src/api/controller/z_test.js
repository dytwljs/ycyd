const Base = require('./base.js');
const rp = require('request-promise');

module.exports = class extends Base {


  async testAction() {
    const id = await this.model('z_test').add({
      id: ['exp', 'UUID_SHORT()']
      ,name: '微信用户' 
      // register_time: parseInt(new Date().getTime() / 1000)
    });
    console(id);
  }
};