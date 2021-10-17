import { client, Models } from "../core/hello";

class HelloService {
  async sayHello(name) {
    const request = new Models.HelloRequest();
    request.setName(name);
    const result = await new Promise<Models.HelloReply>((resolve, reject) =>
      client.sayHello(request, (err, response) =>
        err ? reject(err) : resolve(response)
      )
    );
    return result.getMessage();
  }
}

export default new HelloService();
