# Rick&Morty Wiki

## Запуск:

Для локального запуска приложения `npm run dev`

Для запуска feature сервера `npm run feature-server`

## Реализованные требования:

### **1 уровень (обязательный - необходимый минимум)**

- [x] Реализованы **Требования к функциональности**

- [x] Для хранения учетных записей пользователей, их Избранного и Истории поиска, используем **LocalStorage**

**React**

- [x] **Пишем функциональные компоненты c хуками** в приоритете над классовыми.
- [x] Есть разделение на **умные и глупые компоненты**

- [x] Есть **рендеринг списков** | [HistoryList](https://github.com/roman-dector/rick-and-morty-wiki/blob/main/src/entities/history/ui/list/list.tsx)

- [x] Реализована хотя бы одна **форма** | [AuthForm](https://github.com/roman-dector/rick-and-morty-wiki/blob/main/src/entities/auth-form/ui/form/form.tsx)

- [x] Есть применение **предохранителя** | [ErrorBoundary](https://github.com/roman-dector/rick-and-morty-wiki/blob/main/src/shared/ui/error-boundary.tsx), [withErrorBoundary](https://github.com/roman-dector/rick-and-morty-wiki/blob/main/src/shared/lib/hocs/error-boundary.tsx), [Favorite page with EB](https://github.com/roman-dector/rick-and-morty-wiki/blob/main/src/pages/favorites/index.tsx), [History page with EB](https://github.com/roman-dector/rick-and-morty-wiki/blob/main/src/pages/history/index.tsx)
- [x] Есть хотя бы один **кастомный хук** | [useInit](https://github.com/roman-dector/rick-and-morty-wiki/blob/main/src/app/hooks/use-init.ts), [useDebounce](https://github.com/roman-dector/rick-and-morty-wiki/blob/main/src/shared/lib/hooks/use-debounce.ts), [useFeatureFlags](https://github.com/roman-dector/rick-and-morty-wiki/blob/main/src/shared/lib/hooks/use-feature-flags.ts)

- [x] Есть применение **Контекст API** | [FeatureFlagsContext](https://github.com/roman-dector/rick-and-morty-wiki/blob/main/src/shared/lib/hooks/use-feature-flags.ts), [withFeatureFlags](https://github.com/roman-dector/rick-and-morty-wiki/blob/main/src/app/providers/feature-flags.ts)

- [x] Поиск не должен триггерить много запросов к серверу (**debounce**) | [useDebounce](https://github.com/roman-dector/rick-and-morty-wiki/blob/main/src/shared/lib/hooks/use-debounce.ts)

- [x] Есть применение **lazy + Suspense** | [Router](https://github.com/roman-dector/rick-and-morty-wiki/blob/main/src/app/router.tsx)

- [x] Хотя бы несколько компонентов используют **PropTypes** | [CharacterPage](https://github.com/roman-dector/rick-and-morty-wiki/blob/main/src/entities/character/ui/page/page.tsx), [CharacterStatus](https://github.com/roman-dector/rick-and-morty-wiki/blob/main/src/entities/character/ui/status/status.tsx)

**Redux**

- [x] Используем **Modern Redux with Redux Toolkit**

- [x] Используем **слайсы** | [user slice](https://github.com/roman-dector/rick-and-morty-wiki/blob/main/src/entities/user/model/slice.ts), [history slice](https://github.com/roman-dector/rick-and-morty-wiki/blob/main/src/entities/history/model/slice.ts), [favorites slice](https://github.com/roman-dector/rick-and-morty-wiki/blob/main/src/entities/favorites/model/slice.ts)

- [x] Есть хотя бы одна **кастомная мидлвара** или **createListenerMiddleware** | [Protect middleware](https://github.com/roman-dector/rick-and-morty-wiki/blob/main/src/app/providers/store/middlewares/protect.ts), [History middleware](https://github.com/roman-dector/rick-and-morty-wiki/blob/main/src/app/providers/store/middlewares/history.ts)

- [x] Используется **RTK Query** | [characterApi](https://github.com/roman-dector/rick-and-morty-wiki/blob/main/src/entities/character/api/api.ts), [episodeApi](https://github.com/roman-dector/rick-and-morty-wiki/blob/main/src/entities/episode/api/api.ts)

- [x] Используется **Transforming Responses** | [episodeApi](https://github.com/roman-dector/rick-and-morty-wiki/blob/main/src/entities/episode/api/api.ts)

### **2 уровень (необязательный)**

- [x] Использование **TypeScript**
- [x] Подключен **storybook** и созданы два, три сториса с knobs, которые показывают разные состояния компонента | [AuthForm](https://github.com/roman-dector/rick-and-morty-wiki/blob/main/src/entities/auth-form/ui/form/form.stories.ts), [TelegramShareButton](https://github.com/roman-dector/rick-and-morty-wiki/blob/main/src/features/share-in-telegram/ui/button.stories.ts)
- [ ] ~~Использование **Firebase** для учетных записей пользователей и их Избранного и Истории поиска~~
- [x] **Низная связанность клиентского кода**, использующего апи кода, работающего с внешним стором.
- [ ] ~~Настроен **CI/CD**~~
- [ ] ~~Реализована **виртуализация списков**~~

- [x] Используются **мемоизированные селекторы** (createSelector) | [history selector](https://github.com/roman-dector/rick-and-morty-wiki/blob/main/src/entities/history/model/selectors.ts), [isFavorite selector](https://github.com/roman-dector/rick-and-morty-wiki/blob/main/src/entities/favorites/model/selectors.ts)
- [ ] ~~Используется **нормализованная структура стейта** (createEntityAdapter)~~
- [ ] ~~Проведена **оптимизация приложения**~~

- [x] **Feature Flags.** Реализовать фичу “Поделиться в телеграм”, закрытую под фича флагом | [server](https://github.com/roman-dector/rick-and-morty-wiki/blob/main/feature-server/server.js), [getFlags](https://github.com/roman-dector/rick-and-morty-wiki/blob/main/src/shared/api/feature-flags/api.ts), [CharacterCard widget](https://github.com/roman-dector/rick-and-morty-wiki/blob/main/src/widgets/character-card/ui/card.tsx)
- [ ] ~~Добавить **тесты** через jest, react-testing-library или Playwright~~
- [x] Связь UI и бизнес-логики построена не через команды, а через **события**
- [x] **Project Console API [за этот пункт можно заработать весомое кол-во доп. баллов]**

### Дополнительно

- Используемое API [Rick&Morty](https://rickandmortyapi.com/)
- Приложение построено согласно архитектуре [Feature-Sliced Design](https://feature-sliced.design/ru/)
- В проекте использованы компоненты библиотеки [MUI](https://mui.com/material-ui/)
- Работа с формами организована с помощью [React-Hook-Form](https://react-hook-form.com/)
- Для валидации данных использован валидатор [Yup](https://github.com/jquense/yup)
