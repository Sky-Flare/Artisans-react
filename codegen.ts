import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: './sdl.graphql',
  documents: 'src/**/*.graphql',
  generates: {
    './src/generated/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
}

export default config
