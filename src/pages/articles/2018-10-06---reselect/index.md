---
title: "reselect"
date: "2018-10-06T11:44:00.000Z"
layout: post
draft: false
path: "/posts/reselect/"
category: "tech"
tags:
---

- [https://github.com/reactjs/reselect](reselect)

reselect는 redux에 붙여서 쓸 수 있는 selector 라이브러리로 역할은 아래의 두 가지로 정리된다.

1.  컴포넌트를 redux에 connect 시킬 때 store로부터 데이터를 꺼내와서 매핑시키는 부분 추상화
2.  selector 함수에서 반환되는 값을 캐싱하여 성능 향상

가령 아래와 같은 코드가 있다고 가정하면,

```js
const mapStateToProps = (state, ownProps) => {
	const { contentIds } = state.userContent;
	return {
		contentIds,
	};
};
```

reselect를 붙여 아래와 같은 형태로 정리할 수 있다.

```js
// selector
const getUserContent = state => state.userContent;

const selectUserContentIds = createSelector(
	[ getUserContent ], // input selector
	userContent => userContent.contentIds
);

//component
const mapStateToProps = (state, ownProps) => ({
	contentIds: selectUserContentIds(state),
});
```

이러한 형태에서 먼저 눈에 띄는 장점은 컴포넌트 단에서 redux store의 구조를 알 필요없이 selector 만 호출할 수 있다는 점이다.
이외에도 reselect는 memoized selector 를 통해서 성능 향상을 꾀할 수 있다.

여기서 주의할 점은, 만약 리스트 형태의 컴포넌트에서 selector를 사용할 경우 각 리스트 아이템마다 필요로 하는 데이터가 다르게 되기 떄문에 정상적으로 memoized 되지 않는다는 점이다. 이 경우에는 selector를 생성하는 로직을 함수로 한번 래핑하여 각 리스트 아이템들마다 다른 selector를 사용하도록 해야 한다.

```js
// selector
const getUserContent = state => state.favoriteContent;

const selectTitleByContentId = (state, contentId) => createSelector(
	[ getUserContent ],
	userContent => userContent.titles[contentId]
)(state);

// list item component
const mapStateToProps = (state, ownProps) => ({
	title: selectTitleByContentId(state, ownProps.contentId),
});
```

reselect의 또다른 특징으로는 composable 하다는 점이다.
아래의 경우처럼 미리 만들어놓은 selector가 다른 selector의 input selector가 될 수 있어 selector들을 조합하는 것이 가능하다.

```js
// selector
const getUserContent = state => state.userContent;
const getEntities = state => state.entities;

const selectUserContentIds = createSelector(
	[ getUserContent ], // input selector
	userContent => userContent.contentIds
);

const selectUserContents = createSelector(
	[ selectUserContentIds, getEntities ],
	(userContentIds, entities) => userContentIds.map(contentId => entities.contents[contentId].data)
);

//component
const mapStateToProps = (state, ownProps) => ({
	contents: selectUserContents(state),
});
```
