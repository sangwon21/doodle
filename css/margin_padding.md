# padding & margin

## 가로-세로 비율

```css
.card-image {
    height: 0;
    padding-bottom: 60%;
}
```

-   padding은 width를 기준으로 움직인다

## 컨테이너에 마진 줘서 패딩만큼 공간 없애기

```css
.card-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -1rem;
}

.card-item {
    width: 50%;
    padding: 0 1rem;
}
```

## margin의 의미

-   margin-left: auto; 왼쪽에 있는 마진을 다 쓴다
