"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { vantagens } from "@/assets/vantagens";
import { mockProducts } from "@/assets/mockProducts";
import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import api from "@/app/api/routes";
import Shop from "@/components/Shop";

export default function Home() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-2xl">
          <div
            className="mx-auto mb-4 flex max-w-fit items-center
        justify-center space-x-2 overflow-hidden rounded-full
        border border-gray-200 bg-white px-7 py-2
        shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50"
          >
            <p className="text-sm font-semibold text-gray-700">
              A atitude é o nosso brilho mais precioso!
            </p>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Nós pensamos em <span className="text-green-600"> estilo </span>
            de um jeito diferente.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            A Amarílis foi criada para elevar a vida cotidiana, desafiando o
            obvio, o padrão, com um estilo único e peças fantasticas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Compre agora
            </Link>
            <Button variant="ghost"> Entre em contato &rarr; </Button>
          </div>
        </div>
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 dm:grid-cls-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {vantagens.map((vantagem) => (
              <div
                key={vantagem.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-green-100 text-green-900">
                    {<vantagem.icon className="w-1/3 h-1/3" />}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {vantagem.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {vantagem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="border-t border-gray-200 bg-gray-50">
        <Shop />

        <section className="border-t border-gray-200 bg-gray-50">
          <MaxWidthWrapper className="py-10">
            <h3 className="text-3xl text-center uppercase font-bold md:text-4xl md:mt-11">
              Fique <span className="text-green-600"> atualizada </span> <br />{" "}
              das novidades
            </h3>
            <p className="mt-6 text-center text-lg text-muted-foreground">
              Se inscreva na nossa newsletter para ficar por dentro e todas as
              novidades e tendencias.
            </p>
            <div className="flex flex-col items-center">
              <form className="flex flex-col items-center">
                <div>
                  <div className="lg:w-[700px] py-2">
                    <Label htmlFor="text"> Nome </Label>
                    <Input
                      type="text"
                      className={cn({
                        "focus-visible:ring-red-500": errors.email,
                      })}
                      placeholder="Seu nome"
                    />
                  </div>
                </div>
                <div>
                  <div className="lg:w-[700px] py-2">
                    <Label htmlFor="email"> Email </Label>
                    <Input
                      type="email"
                      className={cn({
                        "focus-visible:ring-red-500": errors.email,
                      })}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <Button> Quero estar sempre atualizada! </Button>
              </form>
            </div>
          </MaxWidthWrapper>
        </section>
      </section>
    </>
  );
}
