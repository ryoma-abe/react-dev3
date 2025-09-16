import { useLocale } from "../context/Locale/LocaleContext";
import MainLayout from "../layouts/MainLayout";

export default function Locale() {
  const { locale } = useLocale();

  return (
    <MainLayout>
      <h1>{locale === "ja" ? "こんにちは" : "Hello"}</h1>
    </MainLayout>
  );
}
