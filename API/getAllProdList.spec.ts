import { test, expect } from "@playwright/test";
import z from "zod";

test("Get all products list", async ({ request }) => {
  const baseUrl = "https://automationexercise.com/api";


  const productsResponse = await request.get(`${baseUrl}/productsList`);
  expect(productsResponse.status()).toBe(200);


  const productSchema = z.object({
    id: z.number().positive(),
    name: z.string(),
    price: z.string(),
    brand: z.string(),
    category: z.object({
      usertype: z.object({ usertype: z.string() }),
      category: z.string(),
    }),
  });

  const responseSchema = z.object({
    products: z.array(productSchema).nonempty(),
  });


  const responseJSON = await productsResponse.json();
  responseSchema.parse(responseJSON);

  console.log("Products fetched successfully:", responseJSON.products[0]);
});

test("POST To All Products List", async ({ request }) => {
  const baseUrl = "https://automationexercise.com/api";
  const productsResponse = await request.post(`${baseUrl}/productsList`);
  expect(productsResponse.status()).toBe(405);
  const responseJSON = await productsResponse.json();
  expect(responseJSON.message).toBe("This request method is not supported.");

  console.log("POST request correctly rejected:", responseJSON);
});

test("Get all brands list", async ({ request }) => {
  const baseUrl = "https://automationexercise.com/api";

  const brandsResponse = await request.get(`${baseUrl}/brandsList`);
  expect(brandsResponse.status()).toBe(200);

  const brandSchema = z.object({
    id: z.number().positive(),
    brand: z.string(),
  });

  const responseSchema = z.object({
    brands: z.array(brandSchema).nonempty(),
  });

  const responseJSON = await brandsResponse.json();
  responseSchema.parse(responseJSON);

  console.log("Brands fetched successfully:", responseJSON.brands[0]);
});
