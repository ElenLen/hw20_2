# hw20_2

Работа с открытым API — Swapi. Swapi — это доступный источник данных для всех данных из канонической вселенной «Звездных войн». Можно запросить данные о персонажах, кораблях и не только!
Нужно создать приложение, которое будет делать запрос к API и полученную информацию показывать на экране.
В запросе нужно передать, какую сущность хотим получить (фильмы, людей, планет starships) и её числовой идентификатор.
Запрос должен уходить на сервер при нажатии на кнопку (нужно добавить обработчик). В разметке HTML должно быть минимум два поля: в первое нужно выводить результат поиска, если данные пришли и всё хорошо, во втором — ошибку, если что-то пошло не так. (Добейтесь, чтобы ваше приложение выводило понятные пользователю сообщения в случае ошибки, например «Сервер не доступен»).
Сообщения должны быть видны поочередно, если результат показан, ошибка должна быть сброшена. И наоборот. Обязательно добавьте обработчик ответа: если ответ успешный, следующий обработчик then получит объект ответа на вход, если с ответом что-то не так, отклоните промис (для этого верните Promise.reject с кодом статуса ответа). Блок catch и finally использовать обязательно.
Хороший интерфейс сообщает пользователю, что идёт загрузка надписью «Идёт загрузка» или крутящимся лоадером пока идёт запрос. Если хотите улучшить ваше приложение, то вы можете также реализовать этот функционал.
