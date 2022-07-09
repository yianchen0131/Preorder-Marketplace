import minimongo from "minimongo";
// import { itemData1 } from "./ItemData";
class ItemManager {
  /**
   * Basic function for creating some starting data
   */
  initializeData() {}

  //   getPublications(doneCBK) {
  //     let res;

  //     let db = new minimongo.IndexedDb(
  //       {
  //         namespace: "pubManagerDB",
  //       },
  //       function () {
  //         console.log("DB Created");

  //         db.addCollection("publications", function () {
  //           db.publications.find({}).fetch(function (publications, err) {
  //             res = publications;
  //             console.log("List of publications", publications);

  //             doneCBK(publications);
  //           });
  //         });
  //       }
  //     );
  //     return res;
  //   addItem() {
  //     console.log("testing DB");
  //     const IndexedDb = minimongo.IndexedDb;

  /**
   * getItem() method to retrieve items
   * @param {*} doneCBK
   * @returns
   */
  //   getItem(doneCBK) {
  //     let res;
  //     let db = new minimongo.IndexedDb({ namespace: "ItemsDB" }, function () {
  //       console.log("new ItemsDB created");
  //       db.addCollection("items", function () {
  //         db.publications.find({setName: "Super Mask Set"}).fetch(function (items, err) {
  //           res = items;
  //           console.log("The set", items);
  //           doneCBK(items);
  //         });
  //       });
  //     });
  //     return res;
  //   }

  getItem(obj, _setID) {
    let res;
    const IndexedDb = minimongo.IndexedDb;
    let db = new IndexedDb({ namespace: "Item-DB" }, function () {
      db.addCollection("itemsDB", function () {
        db.itemsDB.upsert(obj, function () {
          res = db.itemsDB.find({ setID: _setID });
        });
      });
    });
    return res.setName;
  }

  /**
   * addItem() method that adds the items from ItemData to the database
   * accepts a list of objects and upserts to minimongoDB
   * @param  {...any} args
   */

  addItem(obj) {
    console.log("testing DB");
    const IndexedDb = minimongo.IndexedDb;

    // Create items database
    let itemDb = new IndexedDb({ namespace: "Itemsdb" }, function () {
      // Add items collection to the database
      itemDb.addCollection("items", function () {
        // Always use upsert for both inserts and modifies
        itemDb.items.upsert(obj, function (res) {
          //success:
          console.log("Item inserted", res);
        });
      });
    });
  }
}

export default ItemManager;
