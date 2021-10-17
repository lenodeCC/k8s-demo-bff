# k8s-demo-bff  容器测试demo

## 用途
bff层用于测试容器间grpc通信以及configMap和secret读取

## GRPC服务
[grpc-service](https://github.com/lenodeCC/k8s-demo-service)

## 接口
注：为了测试方便，使用的都是get访问

### GET /grpcTest
测试grpc通信，默认访问helloSvc:50051

可以在项目根目录创建config.json来调整地址
```
{
  "grpc.hello": {
    "url": "localhost:50051"
  }
}

```


* 入参 name 返回名字

### GET /configTest
测试读取configMap，即读取./configMap内容
### GET /secretTest
测试读取secret，即读取./secret内容

## 构建镜像
```
docker build --rm -t k8s-demo-bff:latest .
```
