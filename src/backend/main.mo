import MixinStorage "blob-storage/Mixin";
import Storage "blob-storage/Storage";
import Text "mo:core/Text";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  include MixinStorage();

  type BiographySection = {
    title : Text;
    content : Text;
  };

  module BiographySection {
    public func compare(section1 : BiographySection, section2 : BiographySection) : Order.Order {
      Text.compare(section1.title, section2.title);
    };
  };

  type GalleryImage = {
    id : Text;
    title : Text;
    description : Text;
    image : Storage.ExternalBlob;
  };

  module GalleryImage {
    public func compare(image1 : GalleryImage, image2 : GalleryImage) : Order.Order {
      Text.compare(image1.id, image2.id);
    };
  };

  var biographySections : [BiographySection] = [
    {
      title = "Early Life";
      content = "Tony Stark was born into wealth and genius. The son of Howard Stark, Tony grew up surrounded by technology and innovation...";
    },
    {
      title = "Becoming Iron Man";
      content = "After being captured and gravely injured, Tony built his first Iron Man suit and discovered his true purpose...";
    },
    {
      title = "Major Battles";
      content = "Tony faced numerous threats, from corporate rivals to alien invasions, always using his intellect and courage to save the world...";
    },
    {
      title = "Legacy";
      content = "Iron Man's legacy lives on through his technology, heroism, and lasting impact on the world...";
    },
  ];

  var galleryImages : [GalleryImage] = [];

  public query ({ caller }) func getBiographySections() : async [BiographySection] {
    biographySections.sort();
  };

  public query ({ caller }) func getGalleryImages() : async [GalleryImage] {
    galleryImages.sort();
  };

  public shared ({ caller }) func addGalleryImage(id : Text, title : Text, description : Text, image : Storage.ExternalBlob) : async () {
    let newImage : GalleryImage = {
      id;
      title;
      description;
      image;
    };
    galleryImages := galleryImages.concat([newImage]);
  };

  public shared ({ caller }) func updateBiographySection(title : Text, content : Text) : async () {
    let updatedSections = biographySections.map(
      func(section) {
        if (section.title == title) {
          {
            title;
            content;
          };
        } else {
          section;
        };
      }
    );
    if (updatedSections == biographySections) {
      Runtime.trap("Section not found");
    } else {
      biographySections := updatedSections;
    };
  };
};
