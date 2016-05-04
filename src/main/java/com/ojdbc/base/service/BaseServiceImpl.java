package com.ojdbc.base.service;

import com.ojdbc.base.bean.User;
import com.ojdbc.base.dao.BaseDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Created by Arthur on 2016/3/21.
 */
@Component("BaseServiceImpl")
public class BaseServiceImpl implements IBaseService {
    @Autowired
    private BaseDAO dao;

    public List<String> test() {
        return dao.selectList("demo1", "test");
    }

    public boolean login(User user) {
        Integer userCount=dao.selectOne("checkLogin",user);
        return userCount>0;
    }
}
