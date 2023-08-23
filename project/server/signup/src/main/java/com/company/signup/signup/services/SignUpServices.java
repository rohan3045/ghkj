package com.company.signup.signup.services;

import com.company.signup.signup.model.Details;
import com.company.signup.signup.repository.SignUpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
@Service
public class SignUpServices {
    @Autowired
    private SignUpRepository signUpRepository;
    List<Details> peoples = new ArrayList<>(
            Arrays.asList(
                    new Details("Ritish", "Jugral",  "ritishjugral@gmail.com", "Ritish_Jugral15", "july2003"),
                    new Details("Nikhil", "Aswal", "nikhilaswal@gmail.com", "Nikhil_Aswal03", "Dec2003")
            )
    );
    public List<Details> getAllUsers() {
        List<Details> peoples = new ArrayList<>();
        signUpRepository.findAll().forEach(Details -> peoples.add(Details));
        return peoples;
    }

    public Details getUsersInfo(String username) {
        return peoples.stream().filter(s -> s.getUsername().equals(username)).findFirst().get();
    }
    public void addUser(Details Details){ signUpRepository.save(Details);}
}
