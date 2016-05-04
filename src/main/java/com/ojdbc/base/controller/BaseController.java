package com.ojdbc.base.controller;

import com.ojdbc.base.bean.AjaxResult;
import com.ojdbc.base.bean.User;
import com.ojdbc.base.service.IBaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Created by Arthur on 2016/2/26.
 */
@Controller
@RequestMapping("/")
public class BaseController {
    @Autowired
    private IBaseService service;


    @RequestMapping("/check.do")
    @ResponseBody
    public Object login(User user, HttpServletRequest request) {
        System.out.println(user);
        AjaxResult ajaxResult = new AjaxResult(true, "成功");
        if (service.login(user)) {
            request.getSession().setAttribute("user", user);
        } else {
            ajaxResult.setSuccess(false);
            ajaxResult.setMsg("失败");
        }
        return ajaxResult;
    }

    @RequestMapping("/showLogin.do")
    public ModelAndView login() {
        return new ModelAndView("base/login");
    }
}
