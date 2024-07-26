import { createContext, useState, useContext, ReactNode } from "react";

interface GitHubContextType {
  user: any;
  repos: any[];
  setUser: (user: any) => void;
  setRepos: (repos: any[]) => void;
}

const GitHubContext = createContext<GitHubContextType | undefined>(undefined);

export const useGitHub = () => {
  const context = useContext(GitHubContext);
  if (!context) {
    throw new Error("useGitHub must be used within a GitHubProvider");
  }
  return context;
};

export const GitHubProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [repos, setRepos] = useState<any[]>([]);

  return (
    <GitHubContext.Provider value={{ user, repos, setUser, setRepos }}>
      {children}
    </GitHubContext.Provider>
  );
};
