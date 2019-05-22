package main

import (
	"net/http" // 引入http包
)

func Handler(w http.ResponseWriter, req *http.Request) { // 处理函数
	w.Write([]byte("Hello World")) // 输出Hello World到[浏览器输出]
}

func main() {
	http.HandleFunc("/", Handler)             // 绑定路径/到Handler函数
	err := http.ListenAndServe(":14250", nil) // 打开服务器，开始监听14250端口
	// 开始监听后，可以打开浏览器访问ip:端口，就可以看到输出（本地为localhost:端口）
	if err != nil {
		panic(err)
	}
}
