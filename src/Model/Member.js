/**
 * Member class, holds information of members
 */

export class Member {
  name;
  emailID;
  phoneNum;
  shippingAddress;

  constructor(_name, _emailID, _phoneNum, _shippingAddress) {
    this.name = _name;
    this.emailID = _emailID;
    this.phoneNum = _phoneNum;
    this.shippingAddress = _shippingAddress;
  }
}

export default Member;
