package com.ojdbc.base.service;

import com.ojdbc.base.bean.User;
import com.ojdbc.base.dao.BaseDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Created by Arthur on 2016/2/29.
 */
public interface IBaseService {
    public List<String> test();
    public boolean login(User user);
}
