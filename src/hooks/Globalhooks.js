import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const Globalhooks = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return { queryClient, navigate };
};
