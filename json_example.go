package main

import (
	"encoding/json"
	// json库
	"fmt"
)

// 定义数据结构
type Test struct {
	Shuzi     int
	Zifuchuan string
}

func main() {
	var (
		a int
		b string
	)
	fmt.Println("输入一个数字：")
	fmt.Scanf("%d", &a)
	fmt.Println("输入一个单词（没有空格）：")
	fmt.Scanf("%s", &b)
	// 定义一个类型为Test的变量
	test := Test{
		a,
		b,
	}
	// 解析数据结构为json字符串
	json, err := json.Marshal(test)
	// json 为[]byte 字节数组
	if err != nil {
		panic(err)
	}
	fmt.Println(string(json))
	// 输出时使用string()将[]byte转为string
}
