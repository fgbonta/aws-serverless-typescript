import { APIGatewayProxyHandler } from 'aws-lambda';

const sumar = (a: number, b: number): string => {
  return (a + b).toString();
}

export const hello: APIGatewayProxyHandler = async (event) => {

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'function executed successfully!',
        result: sumar(1, 2),
      }
    ),
  };

};
