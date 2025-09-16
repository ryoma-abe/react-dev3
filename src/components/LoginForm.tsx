import { useState } from "react";

export default function LoginForm() {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  return (
    <form className="max-w-sm mx-auto p-6 bg-white rounded shadow space-y-4">
      <div className="flex flex-col space-y-1">
        <label htmlFor="email" className="font-medium text-gray-700">
          メールアドレス
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => SetEmail(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="flex flex-col space-y-1">
        <label htmlFor="password" className="font-medium text-gray-700">
          パスワード
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => SetPassword(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        ログイン
      </button>
    </form>
  );
}
