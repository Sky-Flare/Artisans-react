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