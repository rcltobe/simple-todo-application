/**
 * やることリスト
 * title: やることのタイトル
 * isDone: 達成状況　trueになると、チェックが着く
 */
let tasks = [
    { title: "お洗濯", isDone: false },
]

/**
 * [学生1]
 * 引数で与えられるタイトルで「やること」が作成されるように修正してください。
 */
function addTask(title) {
    const task = { isDone: false }

    // やることのタイトルを設定(このままだと、すべてのタイトルがHello Worldになってしまう！)
    task.title = "Hello World"
    
    // 以降は無視して良い
    tasks.push(task);
    drawTask(task, tasks.length-1);
}

/**
 * [学生2]
 * 引数で与えられる「やること」の達成状態(isDone)を、
 * 現在の状態と反対になるように更新してください。
 * 
 * 例:
 * before   |   after
 * --------------------
 * true     |   false
 * false    |   true
 */
function onUpdateIsDone(task) {
    // 達成状態を更新(このままだと、現在の達成状態で更新されてしまう！)
    const currentValue = task.isDone;
    task.isDone = currentValue;

    return task;
}