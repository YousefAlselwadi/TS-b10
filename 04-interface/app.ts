// Interface

interface User {
    id: number;
    name: string;
    birthDate: Date;
    email?: string;
  }
  
  const primaryUser: User = {
    id: 1,
    name: "Jane",
    birthDate: new Date(),
    email: "jane@gmail.com",
  };
  
  const primaryUser2: User = {
    id: 1,
    name: "Jane",
    birthDate: new Date(),
  };
  
  const primaryUser3: User = {
    id: 1,
    name: "Jane",
    birthDate: new Date(),
  };
  
  // Extending Interface
  
  interface Admin extends User {
    isAdmin: boolean;
  }
  
  const admin: Admin = {
    isAdmin: true,
    id: 2,
    name: "Alice",
    birthDate: new Date(),
  };