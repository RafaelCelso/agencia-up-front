"use client";

import Image from "next/image";

export function ImageTest() {
  return (
    <div className="p-8 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Teste de Imagens</h2>

      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">Logo (WebP):</h3>
          <Image
            src="/images/up-front-logo.webp"
            alt="Up Front Logo"
            width={200}
            height={64}
            className="border border-gray-300"
            onError={(e) => {
              console.error("Erro ao carregar logo:", e);
              e.currentTarget.style.border = "2px solid red";
            }}
            onLoad={() => {
              console.log("Logo carregado com sucesso!");
            }}
          />
        </div>

        <div>
          <h3 className="font-semibold">Favicon (ICO):</h3>
          <Image
            src="/favicon.ico"
            alt="Favicon"
            width={32}
            height={32}
            className="border border-gray-300"
            onError={(e) => {
              console.error("Erro ao carregar favicon:", e);
              e.currentTarget.style.border = "2px solid red";
            }}
            onLoad={() => {
              console.log("Favicon carregado com sucesso!");
            }}
          />
        </div>

        <div>
          <h3 className="font-semibold">Imagem de Teste (PNG):</h3>
          <Image
            src="/placeholder-logo.png"
            alt="Placeholder Logo"
            width={100}
            height={100}
            className="border border-gray-300"
            onError={(e) => {
              console.error("Erro ao carregar placeholder:", e);
              e.currentTarget.style.border = "2px solid red";
            }}
            onLoad={() => {
              console.log("Placeholder carregado com sucesso!");
            }}
          />
        </div>
      </div>
    </div>
  );
}
