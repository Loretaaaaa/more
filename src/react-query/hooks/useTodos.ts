import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () => {
  const fetchTodos = async () => {
    try {
      const response = await axios.get<Todo[]>(
        "https://jsonplaceholder.typicode.com/todos"
      );
      return response.data;
    } catch (error) {
      throw error as AxiosError; // Make error type more specific
    }
  };

  return useQuery<Todo[], AxiosError>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    staleTime: 10 * 1000,
    // initialData: [],
  });
};

export default useTodos;
