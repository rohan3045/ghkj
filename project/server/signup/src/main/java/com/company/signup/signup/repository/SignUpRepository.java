package com.company.signup.signup.repository;

import com.company.signup.signup.model.Details;
import org.springframework.data.repository.CrudRepository;
public interface SignUpRepository extends CrudRepository<Details,String> {
}
