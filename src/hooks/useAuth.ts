import { useState } from "react";

interface User {
  name: string;
  email: string;
}

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  return { user, setUser, loading, setLoading };
};

export default useAuth;
