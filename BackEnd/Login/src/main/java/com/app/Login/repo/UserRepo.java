
package com.app.Login.repo;

import com.app.Login.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User,String>{
	User findByUserId(String userId);

}

