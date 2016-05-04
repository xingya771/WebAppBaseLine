package com.ojdbc.base.tools;

import com.baomidou.mybatisplus.annotations.IdType;
import com.baomidou.mybatisplus.generator.AutoGenerator;
import com.baomidou.mybatisplus.generator.ConfigGenerator;

/**
 * Created by Arthur on 2016/3/29.
 */
public class Table2Bean {
    public void create(){
        ConfigGenerator cg = new ConfigGenerator();
        cg.setEntityPackage("com.ojdbc.entity");// 实体包路径
        cg.setMapperPackage("com.ojdbc.mapper");// 映射文件路径
        cg.setSaveDir("D:/mybatis-plus/");// 生成文件保存位置

		/* 数据库相关配置 */
        cg.setDbDriverName("com.mysql.jdbc.Driver");
        cg.setDbUser("xingya");
        cg.setDbPassword("xingya");
        cg.setDbUrl("jdbc:mysql://127.0.0.1:3306/demo?characterEncoding=utf8");

		/*
		 * 表主键 ID 生成类型, 自增该设置无效。
		 * <p>
		 * IdType.AUTO 			数据库ID自增
		 * IdType.ID_WORKER		全局唯一ID，内容为空自动填充（默认配置）
		 * IdType.INPUT			用户输入ID
		 * </p>
		 */
        cg.setIdType(IdType.AUTO);

		/*
		 * 表是否包括前缀
		 * <p>
		 * 例如 mp_user 生成实体类 false 为 MpUser , true 为 User
		 * </p>
		 */
        cg.setDbPrefix(false);
        AutoGenerator.run(cg);
    }

    public static void main(String[] args) {
        new Table2Bean().create();
    }
}
