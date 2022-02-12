import Map "mo:base/HashMap";
import Text "mo:base/Text";

actor {
    public func greet(name : Text) : async Text {
        return "Hello, " # name # "! Version 3.0";
    };
    public func docs(docName : Text) : async Text {
        return "Document saved: " # docName # "!";
    };
};

// actor {
//     public func greet(name : Text) : async Text {

//         type DocName = Text;
//         type CreatedDate = Text;
//         type DocText = Text;

//         type Entry = {
//             desc: Text;
//             phone: Phone;
//         };

//         let mydocs = Map.HashMap<DocName, Entry>(0, Text.equal, Text,hash);

//         public func insert(name : Name, entry : Entry): async () {
//             phonebook.put(name, entry);
//         };

//         return "Hello there 2.0, " # name # "!";
//     };
// };



