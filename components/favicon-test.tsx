"use client";

import { useEffect, useState } from "react";

export function FaviconTest() {
  const [faviconStatus, setFaviconStatus] = useState<Record<string, string>>(
    {}
  );

  const testFavicon = async (url: string, name: string) => {
    try {
      const response = await fetch(url, { method: "HEAD" });
      setFaviconStatus((prev) => ({
        ...prev,
        [name]: response.ok ? "✅ OK" : `❌ Erro ${response.status}`,
      }));
    } catch (error) {
      setFaviconStatus((prev) => ({
        ...prev,
        [name]: `❌ Erro: ${error}`,
      }));
    }
  };

  useEffect(() => {
    const favicons = [
      { url: "/favicon.ico", name: "favicon.ico" },
      { url: "/favicon-16x16.png", name: "favicon-16x16.png" },
      { url: "/favicon-32x32.png", name: "favicon-32x32.png" },
      { url: "/apple-touch-icon.png", name: "apple-touch-icon.png" },
      {
        url: "/android-chrome-192x192.png",
        name: "android-chrome-192x192.png",
      },
      {
        url: "/android-chrome-512x512.png",
        name: "android-chrome-512x512.png",
      },
      { url: "/site.webmanifest", name: "site.webmanifest" },
    ];

    favicons.forEach(({ url, name }) => {
      testFavicon(url, name);
    });
  }, []);

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">🔍 Teste de Favicon</h2>

      <div className="space-y-2">
        {Object.entries(faviconStatus).map(([name, status]) => (
          <div
            key={name}
            className="flex justify-between items-center p-2 bg-white rounded"
          >
            <span className="font-mono text-sm">{name}</span>
            <span className="text-sm">{status}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 p-4 bg-blue-50 rounded">
        <h3 className="font-semibold mb-2">📋 Instruções:</h3>
        <ol className="text-sm space-y-1">
          <li>1. Verifique se todos os arquivos mostram "✅ OK"</li>
          <li>2. Se algum mostrar erro, verifique os logs do servidor</li>
          <li>
            3. Teste manualmente:{" "}
            <code>curl -I http://seu-dominio.com/favicon.ico</code>
          </li>
          <li>4. Limpe o cache do navegador (Ctrl+F5)</li>
        </ol>
      </div>
    </div>
  );
}
