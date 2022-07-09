import minimongo from "minimongo";

class UserData {
  testDB() {
    console.log("testing DB");
    const IndexedDb = minimongo.IndexedDb;

    // Create IndexedDb
    let db = new IndexedDb(
      { namespace: "Membersdb" },
      function () {
        // Add a collection to the database
        db.addCollection("members", function () {
          let doc = {
            name: "Benson",
            emailID: "benson@gmail.com",
            phoneNum: "9165973444",
            shippingAddress: "1295 Valencia",
          };

          // Always use upsert for both inserts and modifies
          db.members.upsert(doc, function () {
            // Success:

            // Query dog (with no query options beyond a selector)
            db.members.findOne({ name: "Benson" }, {}, function (res) {
              console.log("Member email is: " + res.emailID);
            });
          });
        });
      },
      function () {
        alert("some error!");
      }
    );
  }
}

export default UserData;
