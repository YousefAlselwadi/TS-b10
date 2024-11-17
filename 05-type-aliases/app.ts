// Type Aliases

type Person = {
    id: number;
    name: string;
    birthDate: Date;
    email?: string;
  }
  
  const primaryPerson: Person = {
    id: 1,
    name: "Jane",
    birthDate: new Date(),
    email: "jane@gmail.com",
  };
  
  const primaryPerson2: Person = {
    id: 1,
    name: "Jane",
    birthDate: new Date(),
  };
  
  const primaryPerson3: Person = {
    id: 1,
    name: "Jane",
    birthDate: new Date(),
  };
  
  // Intesection
  
  type Manager = {
    isManager: boolean;
  } & Person; // <---- Similar to extend in interfaces
  
  const managerOfSales: Manager = {
    isManager: true,
    id: 1,
    name: 'Joe',
    birthDate: new Date()
  }
  
  type ManagerAndPerson = Manager & Person;
  
  const managerOfSales2: ManagerAndPerson = {
    isManager: true,
    id: 2,
    name: 'Jane',
    birthDate: new Date()
  }
  
  // Mix with Interface
  
  type ManufactuerAddress = {
    address: string
    zipCode: number
  }
  
  interface Car {
    model: string;
    year: number;
    manufacturer: ManufactuerAddress
  }
  
  const toyota: Car = {
    model: 'corolla',
    year: 2020,
    manufacturer: {
      address: '111 Japan',
      zipCode: 11111
    }
  }