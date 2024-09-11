import { createContext, useContext, useState, ReactNode } from "react";

// Define a type for your user data
interface User {
  id: number;
  name: string;
  // Add other fields as needed
}

// Define the type for your context
interface DataContextType {
  users: User[]; // Array of User objects
  setUsers: (users: User[]) => void; // Function to update users
}

// Create the context with an initial value of undefined
const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]); // Default users to an empty array

  return (
    <DataContext.Provider value={{ users, setUsers }}>
      {children} {/* Return the children wrapped in the provider */}
    </DataContext.Provider>
  );
};

// Custom hook to use the DataContext
export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
