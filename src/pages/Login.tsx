import LoginForm from "../components/LoginForm";
import { useAuth } from "../context/auth/AuthContext";
import MainLayout from "../layouts/MainLayout";

export default function Login() {
  const { user } = useAuth();
  return (
    <MainLayout>{user ? <div>ログイン済です</div> : <LoginForm />}</MainLayout>
  );
}
