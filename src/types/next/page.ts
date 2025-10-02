export interface PageParams {
  [key: string]: string;
}

export interface PageParamsProps<T extends PageParams = PageParams> {
  params?: Promise<T>;
}

export interface PageSearchParamsProps<T extends PageParams = PageParams> {
  searchParams?: Promise<T>;
}

export type PageProps<
  P extends PageParams,
  S extends PageParams = NonNullable<unknown>
> = PageParamsProps<P> & PageSearchParamsProps<S>;
