export interface Product {
    sys: {
      id: string;
    };
    fields: {
      name: string;
      description: string;
      price: number;
      image: {
        fields: {
          file: {
            url: string;
          };
        };
      };
      category: string;
    };
  }