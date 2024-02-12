import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: { input: any; output: any; }
};

export enum ActionCart {
  Add = 'Add',
  Remove = 'Remove'
}

export type Artisan = {
  __typename?: 'Artisan';
  address: Scalars['String']['output'];
  city: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  lastName: Scalars['String']['output'];
  products?: Maybe<Array<Product>>;
  shops?: Maybe<Array<Shop>>;
  updatedAt: Scalars['DateTime']['output'];
  zipCode: Scalars['Float']['output'];
};

export type Cart = {
  __typename?: 'Cart';
  product?: Maybe<Product>;
  productId: Scalars['Float']['output'];
  quantity: Scalars['Float']['output'];
};

/** New category product */
export type CategoryProductInput = {
  name: Scalars['String']['input'];
  picture?: InputMaybe<Scalars['String']['input']>;
  shopsIds?: InputMaybe<Array<Scalars['Float']['input']>>;
};

/** Update category product */
export type CategoryProductUpdate = {
  categoryProductId: Scalars['Float']['input'];
  shopsIds?: InputMaybe<Array<Scalars['Float']['input']>>;
};

/** New category shop */
export type CategoryShopInput = {
  name: Scalars['String']['input'];
  picture?: InputMaybe<Scalars['String']['input']>;
};

export type Category_Product = {
  __typename?: 'Category_product';
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  picture?: Maybe<Scalars['String']['output']>;
  shops?: Maybe<Array<Shop>>;
};

export type Category_Shop = {
  __typename?: 'Category_shop';
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  picture?: Maybe<Scalars['String']['output']>;
};

export type Client = {
  __typename?: 'Client';
  address: Scalars['String']['output'];
  cart?: Maybe<Array<Cart>>;
  city: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  lastName: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  zipCode: Scalars['Float']['output'];
};

export type ConnectUser = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role: Role;
};

/** New artisan data */
export type CreateArtisanInput = {
  address: Scalars['String']['input'];
  city: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  sirenNumber: Scalars['String']['input'];
  zipCode: Scalars['Float']['input'];
};

/** New client data */
export type CreateClientInput = {
  address: Scalars['String']['input'];
  city: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  zipCode: Scalars['Float']['input'];
};

/** New product data */
export type CreateProductInput = {
  categoriesProductsIds?: InputMaybe<Array<Scalars['Float']['input']>>;
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  picture: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  shopsIds?: InputMaybe<Array<Scalars['Float']['input']>>;
};

/** New shop data */
export type CreateShopInput = {
  address: Scalars['String']['input'];
  city: Scalars['String']['input'];
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  shopCategoriesIds: Array<Scalars['Float']['input']>;
  siretNumber: Scalars['String']['input'];
  zipCode: Scalars['Float']['input'];
};

export enum Days {
  Friday = 'Friday',
  Monday = 'Monday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
  Thursday = 'Thursday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday'
}

/** Get shops by categories id & zip code  */
export type GetShopCatIdsAndZipCode = {
  categoriesIds?: InputMaybe<Array<Scalars['Float']['input']>>;
  /** if null use zipCode user */
  zipcode?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type Horaire_Shop = {
  __typename?: 'Horaire_shop';
  dayId: Scalars['Float']['output'];
  id: Scalars['Float']['output'];
  timeAmEnd?: Maybe<Scalars['String']['output']>;
  timeAmStart?: Maybe<Scalars['String']['output']>;
  timePmEnd?: Maybe<Scalars['String']['output']>;
  timePmStart?: Maybe<Scalars['String']['output']>;
};

export type InputHoraireShop = {
  dayId?: InputMaybe<Days>;
  timeAmEnd?: InputMaybe<Scalars['String']['input']>;
  timeAmStart?: InputMaybe<Scalars['String']['input']>;
  timePmEnd?: InputMaybe<Scalars['String']['input']>;
  timePmStart?: InputMaybe<Scalars['String']['input']>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategoryProduct: Category_Product;
  createCategoryShop: Category_Shop;
  createProduct?: Maybe<Product>;
  createShop?: Maybe<Shop>;
  deleteArtisan: Scalars['Boolean']['output'];
  deleteProduct: Scalars['Boolean']['output'];
  moderateProduct: Scalars['Boolean']['output'];
  moderateShop: Scalars['Boolean']['output'];
  signIn?: Maybe<LoginResponse>;
  signUpArtisan?: Maybe<LoginResponse>;
  signUpClient?: Maybe<LoginResponse>;
  updateArtisan: Artisan;
  updateCart?: Maybe<Cart>;
  updateCategoryProduct?: Maybe<Category_Product>;
  updateProduct?: Maybe<Product>;
};


export type MutationCreateCategoryProductArgs = {
  categoryProductInput: CategoryProductInput;
};


export type MutationCreateCategoryShopArgs = {
  CategoryShopInput: CategoryShopInput;
};


export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput;
};


export type MutationCreateShopArgs = {
  CreateShopInput: CreateShopInput;
  InputHoraireShop?: InputMaybe<Array<InputHoraireShop>>;
};


export type MutationDeleteProductArgs = {
  id: Scalars['Float']['input'];
};


export type MutationModerateProductArgs = {
  id: Scalars['Float']['input'];
  statusModeration: Scalars['Float']['input'];
};


export type MutationModerateShopArgs = {
  id: Scalars['Float']['input'];
  statusModeration: Scalars['Float']['input'];
};


export type MutationSignInArgs = {
  ConnectUser: ConnectUser;
};


export type MutationSignUpArtisanArgs = {
  CreateArtisanInput: CreateArtisanInput;
};


export type MutationSignUpClientArgs = {
  CreateClientInput: CreateClientInput;
};


export type MutationUpdateArtisanArgs = {
  CreateArtisanInput: CreateArtisanInput;
};


export type MutationUpdateCartArgs = {
  UpdateCart: UpdateCart;
};


export type MutationUpdateCategoryProductArgs = {
  categoryProductUpdate: CategoryProductUpdate;
};


export type MutationUpdateProductArgs = {
  createProductInput: UpdateProductInput;
};

export type Product = {
  __typename?: 'Product';
  categoriesProducts?: Maybe<Array<Category_Product>>;
  description: Scalars['String']['output'];
  enabled: Scalars['Float']['output'];
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  picture: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  shops?: Maybe<Array<Shop>>;
};

/** Get products filters */
export type ProductsFilters = {
  categoriesProductsIds?: InputMaybe<Array<Scalars['Float']['input']>>;
  shopId: Scalars['Float']['input'];
};

export type Query = {
  __typename?: 'Query';
  /** Return on artisan */
  artisan?: Maybe<Artisan>;
  /** Return all artisans */
  artisans?: Maybe<Array<Artisan>>;
  categories_productByShop: Array<Category_Product>;
  categories_shop: Array<Category_Shop>;
  clientCart?: Maybe<Array<Cart>>;
  meArtisan?: Maybe<Artisan>;
  meClient?: Maybe<Client>;
  products?: Maybe<Array<Product>>;
  shop?: Maybe<Shop>;
  shops?: Maybe<Array<Shop>>;
};


export type QueryArtisanArgs = {
  artisanId: Scalars['Float']['input'];
};


export type QueryCategories_ProductByShopArgs = {
  shopId: Scalars['Float']['input'];
};


export type QueryProductsArgs = {
  filtersProducts: ProductsFilters;
};


export type QueryShopArgs = {
  shopId: Scalars['Float']['input'];
};


export type QueryShopsArgs = {
  filtersInput?: InputMaybe<GetShopCatIdsAndZipCode>;
};

export enum Role {
  Admin = 'ADMIN',
  Artisan = 'ARTISAN',
  Client = 'CLIENT',
  Owner = 'OWNER'
}

export type Shop = {
  __typename?: 'Shop';
  address: Scalars['String']['output'];
  artisan: Artisan;
  categoriesProducts?: Maybe<Array<Category_Product>>;
  categoriesShops: Array<Category_Shop>;
  city: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  enabled: Scalars['Float']['output'];
  horaireShop?: Maybe<Array<Horaire_Shop>>;
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  zipCode: Scalars['Float']['output'];
};

/** Cart client */
export type UpdateCart = {
  action: ActionCart;
  productId: Scalars['Float']['input'];
  quantity: Scalars['Float']['input'];
};

/** Update product data */
export type UpdateProductInput = {
  categoriesProductsIds?: InputMaybe<Array<Scalars['Float']['input']>>;
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  picture: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  productId: Scalars['Float']['input'];
  shopsIds?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  lastName: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type SingInMutationVariables = Exact<{
  connectUser: ConnectUser;
}>;


export type SingInMutation = { __typename?: 'Mutation', signIn?: { __typename?: 'LoginResponse', accessToken: string } | null };

export type SignUpMutationVariables = Exact<{
  createArtisanInput: CreateArtisanInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUpArtisan?: { __typename?: 'LoginResponse', accessToken: string } | null };

export type MeArtisanQueryVariables = Exact<{ [key: string]: never; }>;


export type MeArtisanQuery = { __typename?: 'Query', meArtisan?: { __typename?: 'Artisan', email: string, firstName: string, id: number, lastName: string, shops?: Array<{ __typename?: 'Shop', id: number, name: string, zipCode: number, address: string, city: string, enabled: number, description: string, categoriesShops: Array<{ __typename?: 'Category_shop', id: number, name: string, picture?: string | null }> }> | null } | null };

export type ShopQueryVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type ShopQuery = { __typename?: 'Query', shop?: { __typename?: 'Shop', id: number, name: string, zipCode: number, address: string, city: string, enabled: number, description: string, categoriesShops: Array<{ __typename?: 'Category_shop', id: number, name: string, picture?: string | null }> } | null };

export type ProductsQueryVariables = Exact<{
  filtersProducts: ProductsFilters;
}>;


export type ProductsQuery = { __typename?: 'Query', products?: Array<{ __typename?: 'Product', id: number, name: string, price: number, description: string, picture: string, categoriesProducts?: Array<{ __typename?: 'Category_product', id: number, name: string, picture?: string | null }> | null }> | null };

export type ProductFragment = { __typename?: 'Product', id: number, name: string, price: number, description: string, picture: string, categoriesProducts?: Array<{ __typename?: 'Category_product', id: number, name: string, picture?: string | null }> | null };

export type CategoryProductFragment = { __typename?: 'Category_product', id: number, name: string, picture?: string | null };

export type AllCategoriesShopQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCategoriesShopQuery = { __typename?: 'Query', categories_shop: Array<{ __typename?: 'Category_shop', name: string, id: number, picture?: string | null }> };

export type CategoryShopFragment = { __typename?: 'Category_shop', id: number, name: string, picture?: string | null };

export type AllMyShopsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllMyShopsQuery = { __typename?: 'Query', meArtisan?: { __typename?: 'Artisan', shops?: Array<{ __typename?: 'Shop', id: number, name: string, zipCode: number, address: string, city: string, enabled: number, description: string, categoriesShops: Array<{ __typename?: 'Category_shop', id: number, name: string, picture?: string | null }> }> | null } | null };

export type ShopFragment = { __typename?: 'Shop', id: number, name: string, zipCode: number, address: string, city: string, enabled: number, description: string, categoriesShops: Array<{ __typename?: 'Category_shop', id: number, name: string, picture?: string | null }> };

export const CategoryProductFragmentDoc = gql`
    fragment categoryProduct on Category_product {
  id
  name
  picture
}
    `;
export const ProductFragmentDoc = gql`
    fragment product on Product {
  id
  name
  price
  description
  picture
  categoriesProducts {
    ...categoryProduct
  }
}
    ${CategoryProductFragmentDoc}`;
export const CategoryShopFragmentDoc = gql`
    fragment categoryShop on Category_shop {
  id
  name
  picture
}
    `;
export const ShopFragmentDoc = gql`
    fragment shop on Shop {
  id
  name
  zipCode
  address
  city
  enabled
  description
  categoriesShops {
    ...categoryShop
  }
}
    ${CategoryShopFragmentDoc}`;
export const SingInDocument = gql`
    mutation SingIn($connectUser: ConnectUser!) {
  signIn(ConnectUser: $connectUser) {
    accessToken
  }
}
    `;
export type SingInMutationFn = Apollo.MutationFunction<SingInMutation, SingInMutationVariables>;

/**
 * __useSingInMutation__
 *
 * To run a mutation, you first call `useSingInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSingInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [singInMutation, { data, loading, error }] = useSingInMutation({
 *   variables: {
 *      connectUser: // value for 'connectUser'
 *   },
 * });
 */
export function useSingInMutation(baseOptions?: Apollo.MutationHookOptions<SingInMutation, SingInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SingInMutation, SingInMutationVariables>(SingInDocument, options);
      }
export type SingInMutationHookResult = ReturnType<typeof useSingInMutation>;
export type SingInMutationResult = Apollo.MutationResult<SingInMutation>;
export type SingInMutationOptions = Apollo.BaseMutationOptions<SingInMutation, SingInMutationVariables>;
export const SignUpDocument = gql`
    mutation SignUp($createArtisanInput: CreateArtisanInput!) {
  signUpArtisan(CreateArtisanInput: $createArtisanInput) {
    accessToken
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      createArtisanInput: // value for 'createArtisanInput'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const MeArtisanDocument = gql`
    query MeArtisan {
  meArtisan {
    email
    firstName
    id
    lastName
    shops {
      ...shop
    }
  }
}
    ${ShopFragmentDoc}`;

/**
 * __useMeArtisanQuery__
 *
 * To run a query within a React component, call `useMeArtisanQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeArtisanQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeArtisanQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeArtisanQuery(baseOptions?: Apollo.QueryHookOptions<MeArtisanQuery, MeArtisanQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeArtisanQuery, MeArtisanQueryVariables>(MeArtisanDocument, options);
      }
export function useMeArtisanLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeArtisanQuery, MeArtisanQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeArtisanQuery, MeArtisanQueryVariables>(MeArtisanDocument, options);
        }
export function useMeArtisanSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<MeArtisanQuery, MeArtisanQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MeArtisanQuery, MeArtisanQueryVariables>(MeArtisanDocument, options);
        }
export type MeArtisanQueryHookResult = ReturnType<typeof useMeArtisanQuery>;
export type MeArtisanLazyQueryHookResult = ReturnType<typeof useMeArtisanLazyQuery>;
export type MeArtisanSuspenseQueryHookResult = ReturnType<typeof useMeArtisanSuspenseQuery>;
export type MeArtisanQueryResult = Apollo.QueryResult<MeArtisanQuery, MeArtisanQueryVariables>;
export const ShopDocument = gql`
    query Shop($id: Float!) {
  shop(shopId: $id) {
    ...shop
  }
}
    ${ShopFragmentDoc}`;

/**
 * __useShopQuery__
 *
 * To run a query within a React component, call `useShopQuery` and pass it any options that fit your needs.
 * When your component renders, `useShopQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShopQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useShopQuery(baseOptions: Apollo.QueryHookOptions<ShopQuery, ShopQueryVariables> & ({ variables: ShopQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ShopQuery, ShopQueryVariables>(ShopDocument, options);
      }
export function useShopLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ShopQuery, ShopQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ShopQuery, ShopQueryVariables>(ShopDocument, options);
        }
export function useShopSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ShopQuery, ShopQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ShopQuery, ShopQueryVariables>(ShopDocument, options);
        }
export type ShopQueryHookResult = ReturnType<typeof useShopQuery>;
export type ShopLazyQueryHookResult = ReturnType<typeof useShopLazyQuery>;
export type ShopSuspenseQueryHookResult = ReturnType<typeof useShopSuspenseQuery>;
export type ShopQueryResult = Apollo.QueryResult<ShopQuery, ShopQueryVariables>;
export const ProductsDocument = gql`
    query Products($filtersProducts: ProductsFilters!) {
  products(filtersProducts: $filtersProducts) {
    ...product
  }
}
    ${ProductFragmentDoc}`;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      filtersProducts: // value for 'filtersProducts'
 *   },
 * });
 */
export function useProductsQuery(baseOptions: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables> & ({ variables: ProductsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export function useProductsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsSuspenseQueryHookResult = ReturnType<typeof useProductsSuspenseQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const AllCategoriesShopDocument = gql`
    query AllCategoriesShop {
  categories_shop {
    name
    id
    picture
  }
}
    `;

/**
 * __useAllCategoriesShopQuery__
 *
 * To run a query within a React component, call `useAllCategoriesShopQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCategoriesShopQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCategoriesShopQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllCategoriesShopQuery(baseOptions?: Apollo.QueryHookOptions<AllCategoriesShopQuery, AllCategoriesShopQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllCategoriesShopQuery, AllCategoriesShopQueryVariables>(AllCategoriesShopDocument, options);
      }
export function useAllCategoriesShopLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllCategoriesShopQuery, AllCategoriesShopQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllCategoriesShopQuery, AllCategoriesShopQueryVariables>(AllCategoriesShopDocument, options);
        }
export function useAllCategoriesShopSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AllCategoriesShopQuery, AllCategoriesShopQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AllCategoriesShopQuery, AllCategoriesShopQueryVariables>(AllCategoriesShopDocument, options);
        }
export type AllCategoriesShopQueryHookResult = ReturnType<typeof useAllCategoriesShopQuery>;
export type AllCategoriesShopLazyQueryHookResult = ReturnType<typeof useAllCategoriesShopLazyQuery>;
export type AllCategoriesShopSuspenseQueryHookResult = ReturnType<typeof useAllCategoriesShopSuspenseQuery>;
export type AllCategoriesShopQueryResult = Apollo.QueryResult<AllCategoriesShopQuery, AllCategoriesShopQueryVariables>;
export const AllMyShopsDocument = gql`
    query AllMyShops {
  meArtisan {
    shops {
      ...shop
    }
  }
}
    ${ShopFragmentDoc}`;

/**
 * __useAllMyShopsQuery__
 *
 * To run a query within a React component, call `useAllMyShopsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllMyShopsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllMyShopsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllMyShopsQuery(baseOptions?: Apollo.QueryHookOptions<AllMyShopsQuery, AllMyShopsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllMyShopsQuery, AllMyShopsQueryVariables>(AllMyShopsDocument, options);
      }
export function useAllMyShopsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllMyShopsQuery, AllMyShopsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllMyShopsQuery, AllMyShopsQueryVariables>(AllMyShopsDocument, options);
        }
export function useAllMyShopsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AllMyShopsQuery, AllMyShopsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AllMyShopsQuery, AllMyShopsQueryVariables>(AllMyShopsDocument, options);
        }
export type AllMyShopsQueryHookResult = ReturnType<typeof useAllMyShopsQuery>;
export type AllMyShopsLazyQueryHookResult = ReturnType<typeof useAllMyShopsLazyQuery>;
export type AllMyShopsSuspenseQueryHookResult = ReturnType<typeof useAllMyShopsSuspenseQuery>;
export type AllMyShopsQueryResult = Apollo.QueryResult<AllMyShopsQuery, AllMyShopsQueryVariables>;