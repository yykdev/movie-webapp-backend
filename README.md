# movie-webapp-backend

## [GraphQL yoga : https://github.com/prisma/graphql-yoga](https://github.com/prisma/graphql-yoga)

### install

> yarn add graphql-yoga

### GraphQL 사용 이유

> Over-fetching 과 Under-fetching 을 해결 할 수 있다.

-   Over-fetching

```
/usrs/ GET

만약 처음 리스트에서 유저리스트에 GET 요청을 보내면
필요 하지 않은 프로필 사진, 이메일 등의 정보 까지 조회 되기 때문에 비효율 적이다.

=> 요청한(필요한) 영역의 정보보다 많은 정보를 서버에서 받는 경우를 Over-fetching 이라 한다.
```

-   Under-fetching

```
/feed/
/notifications/
/user/1/

한 화면을 구성 할 때 여러번의 요청이 오고가야 하는 경우처럼
한개를 완성하기 위해 많은 소스를 요청 하는 것을 Under-fetching 이라 한다.
```

`GraphQL은 한 query에 정확하게 원하는 정보만 받을 수 있도록 해준다.`

```
query {
    feed {
        comments
        likeNum
    }
    notifications {
        isRead
    }
    user {
        username
        profilePic
    }
}
```
