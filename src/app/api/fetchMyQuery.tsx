type Variables = Record<string, any>;

interface GraphQLResponse<T> {
  data?: T;
  errors?: { message: string }[];
}

interface Course {
  course_code: string;
  course_name: string;
}

interface MyQueryResponse {
  courses: Course[];
}

function fetchGraphQL<T>(
  operationsDoc: string,
  operationName: string,
  variables: Variables,
): Promise<GraphQLResponse<T>> {
  return fetch("https://graphql.csesoc.app/v1/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: operationsDoc,
      variables,
      operationName,
    }),
  }).then((result) => result.json());
}

const operationsDoc = `
  query MyQuery {
    courses {
      course_code
      course_name
    }
  }
`;

function fetchMyQuery(): Promise<GraphQLResponse<MyQueryResponse>> {
  return fetchGraphQL<MyQueryResponse>(operationsDoc, "MyQuery", {});
}

export default fetchMyQuery;
