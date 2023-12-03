// // FirebaseのAdmin SDKをインポートする
// import { initializeApp, getApps, credential } from 'firebase-admin/app';
// import { getAuth, createUser } from 'firebase-admin/auth';

// // Firebaseのプロジェクトの設定情報を記述する
// const firebaseAdminConfig = {
//   credential: credential.cert({
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
//     privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
//   }),
//   databaseURL: process.env.FIREBASE_DATABASE_URL,
// };

// // FirebaseのAdmin SDKを初期化する関数を定義する
// export function customInitApp() {
//   if (getApps().length <= 0) {
//     initializeApp(firebaseAdminConfig);
//   }
// }

// // Firebaseの機能を使う
// // 例えば、認証機能を使う場合は、以下のように書く
// const auth = getAuth();
// // authのメソッドを使って、ユーザーの管理や認証を行う
// // 例えば、ユーザーを作成する場合は、以下のように書く
// createUser(auth, {
//   email: 'user@example.com',
//   password: 'secretPassword',
// })
//   .then((userRecord) => {
//     // ユーザーの作成に成功したら、何かしらの処理を行う
//     // 例えば、作成されたユーザーの情報を表示する
//     console.log('Successfully created new user:', userRecord.uid);
//   })
//   .catch((error) => {
//     // ユーザーの作成に失敗したら、エラーメッセージを表示する
//     console.log('Error creating new user:', error);
//   });