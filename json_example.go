package main

import (
	"encoding/json"
	"fmt"
)

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
	test := Test{
		a,
		b,
	}
	json, err := json.Marshal(test)
	if err != nil {
		panic(err)
	}
	fmt.Println(string(json))
}
