# FSD 아키텍쳐

## 1. app 폴더

- 역할 : 애플리케이션의 “루트” 레벨에서 전역 설정과 제공자(Provider)를 등록하는 곳입니다.
- **포함 내용:**
  - 브라우저 라우터 설정
  - 전역 상태 관리 라이브러리(리덕스, 리액트 쿼리 등)
  - 테마, i18n, 전역 스타일 등 애플리케이션 전체에서 사용하는 설정 및 컨텍스트
- 목적:앱 전체에 영향을 미치는 설정과 컴포넌트를 한 곳에서 관리해 초기 진입점과 공통 인프라를 구성합니다. 다른

---

## 2. pages 폴더

- **역할 :** 라우터 경로에 따른 “페이지” 단위의 컴포넌트를 구성합니다.
- **포함 내용:**
  - 각 URL 경로에 대응하는 컨테이너 컴포넌트
  - 페이지 전환 및 레이아웃 조정 관련 로직
- 목적:사용자의 URL 접근에 따라 개별 페이지 단위로 로직과 UI를 분리, 독립적인 관리가 가능하도록 합니다.

---

## 3. shared 폴더

- 역할:여러 페이지나 기능에서 공통적으로 사용하는 “재사용 가능한” 코드들을 모아둡니다.
- **포함 내용:**
  - 커스텀 훅 (Custom Hooks)
  - 타입 정의 (Typing)
  - 유틸리티 함수 (Utils)
  - 공통 상수 및 헬퍼 등
- 목적:중복을 줄이고, 다양한 영역에서 사용할 수 있는 범용 로직 및 유틸리티를 한 곳에 집중시켜 유지보수를 용이하게 합니다.

---

## 4. entities 폴더

- 역할:도메인(비즈니스) 단위의 “개별 엔티티”에 대한 컴포넌트와 관련 로직을 관리합니다.
- **포함 내용:**
  - 핵심 도메인 객체(예: User, Product 등)와 관련된 UI 컴포넌트
  - 도메인 모델 및 비즈니스 로직의 일부 구현
- 목적:애플리케이션의 핵심 도메인을 기준으로 구성 요소들을 분리하여, 도메인별 재사용과 독립적인 테스트가 가능하도록 설계합니다.

---

## 5. features 폴더

- 역할:특정 기능(Feature) 단위로 “비즈니스 로직과 상태 관리”를 담당합니다.
- **포함 내용:**
  - 기능별 데이터 처리 로직 및 상태 관리 (ex. 사용자 인증, 데이터 필터링 등)
  - 해당 기능에 국한된 UI 컴포넌트 (하지만 entities와 달리 도메인보다는 기능 단위로 분리)
- **목적:**단일 기능 내에서 비즈니스 로직, 상태, 그리고 UI가 밀접하게 결합되어 있어, 기능별 모듈화와 독립적인 개발 및 확장이 가능하도록 합니다.

## 요약

React FSD 아키텍처는 **관심사의 분리(Separation of Concerns)**, **재사용성**, **유지보수성**에 초점을 맞춥니다.

- **app**은 전역 설정과 초기 인프라를,
- **pages**는 URL에 따른 페이지 단위의 분리를,
- **shared**는 여러 곳에서 공통으로 사용하는 유틸리티를,
- **entities**는 도메인별 핵심 컴포넌트를,
- **features**는 특정 기능의 데이터 및 로직을,

---

# 폴더구조 예시

## 전체 폴더 구조

```
cpp
복사편집
src/
├── app/
│   ├── App.tsx
│   └── store.ts            // (상태 관리가 필요하면 Redux 등의 설정)
├── pages/
│   └── ItemsPage/
│       └── ItemsPage.tsx   // 라우트에 따른 페이지 컴포넌트
├── shared/
│   ├── hooks/
│   │   └── useFetch.ts     // API 호출 등 공통 로직의 커스텀 훅
│   ├── utils/
│   │   └── formatPrice.ts  // 가격 포맷팅 등 유틸리티 함수
│   └── typings/
│       └── item.d.ts       // 공통 타입 정의 (Item 인터페이스)
├── entities/
│   └── item/
│       └── ItemCard.tsx    // 도메인(엔티티) 관련 UI 컴포넌트
├── features/
│   └── itemList/
│       └── ui/
│           └── ItemList.tsx  // 특정 기능(아이템 리스트) 관련 UI + 로직
└── widgets/
    └── ItemListWidget/
        └── ItemListWidget.tsx  // 여러 컴포넌트를 조합한 위젯 형태의 컴포넌트

```

---

## 각 폴더 및 파일 설명과 코드 예시

### 1. **app 폴더**

- **App.tsx:**전체 애플리케이션의 라우터와 전역 설정을 담당합니다.

```tsx
tsx;
복사편집;
// src/app/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemsPage from '../pages/ItemsPage/ItemsPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/items' element={<ItemsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
```

---

### 2. **pages 폴더**

- **ItemsPage.tsx:**URL 경로에 대응하는 페이지 컴포넌트로, 아이템 리스트 위젯을 포함합니다.

```tsx
tsx;
복사편집;
// src/pages/ItemsPage/ItemsPage.tsx
import React from 'react';
import ItemListWidget from '../../widgets/ItemListWidget/ItemListWidget';

const ItemsPage: React.FC = () => {
  return (
    <div>
      <h1>아이템 리스트 페이지</h1>
      <ItemListWidget />
    </div>
  );
};

export default ItemsPage;
```

---

### 3. **shared 폴더**

### a. **hooks** – 공통 API 호출 훅

```tsx
tsx;
복사편집;
// src/shared/hooks/useFetch.ts
import { useState, useEffect } from 'react';

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
```

### b. **utils** – 공통 유틸리티 함수

```tsx
tsx;
복사편집;
// src/shared/utils/formatPrice.ts
export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}
```

### c. **typings** – 공통 타입 정의

```tsx
tsx;
복사편집;
// src/shared/typings/item.d.ts
export interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}
```

---

### 4. **entities 폴더**

- **ItemCard.tsx:**도메인(엔티티)인 아이템을 시각적으로 표현하는 순수 UI 컴포넌트입니다.(여기서는 상태나 비즈니스 로직 없이 단순히 데이터를 보여주는 역할만 합니다.)

```tsx
tsx;
복사편집;
// src/entities/item/ItemCard.tsx
import React from 'react';
import { Item } from '../../shared/typings/item';
import { formatPrice } from '../../shared/utils/formatPrice';

interface ItemCardProps {
  item: Item;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  return (
    <div className='item-card'>
      <img src={item.imageUrl} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>{formatPrice(item.price)}</p>
    </div>
  );
};

export default ItemCard;
```

---

### 5. **features 폴더**

- **ItemList.tsx:**특정 기능(아이템 리스트) 단위에서 API 호출(커스텀 훅 사용)과 데이터를 받아와서 **entities**의 `ItemCard` 컴포넌트를 조합하여 리스트를 출력합니다.

```tsx
tsx;
복사편집;
// src/features/itemList/ui/ItemList.tsx
import React from 'react';
import useFetch from '../../../shared/hooks/useFetch';
import { Item } from '../../../shared/typings/item';
import ItemCard from '../../../entities/item/ItemCard';

const ItemList: React.FC = () => {
  // 실제 API URL로 교체하거나 Mock 데이터를 사용할 수 있음
  const { data, loading, error } = useFetch<Item[]>(
    'https://api.example.com/items'
  );

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>아이템을 불러오는데 에러가 발생했습니다.</p>;

  return (
    <div className='item-list'>
      {data && data.map((item) => <ItemCard key={item.id} item={item} />)}
    </div>
  );
};

export default ItemList;
```
