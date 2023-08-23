package com.company.signup.signup.controller;

import com.company.signup.signup.model.Details;
import com.company.signup.signup.services.SignUpServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin (origins="*")
@RestController
public class SignUpController {
    @Autowired
    SignUpServices signUpServices;
    @RequestMapping(method = RequestMethod.GET,value = "/peoples")
    public List<Details> getAllUsers(){return signUpServices.getAllUsers();}
    @RequestMapping(method = RequestMethod.GET,value = "/peoples/{username}")
    public Details getUsersInfo(@PathVariable String username){return signUpServices.getUsersInfo(username);}
    @RequestMapping(method = RequestMethod.POST,value = "/peoples")
    public Details addUser(@RequestBody Details Details){
        signUpServices.addUser(Details);
        return Details;
    }
}
