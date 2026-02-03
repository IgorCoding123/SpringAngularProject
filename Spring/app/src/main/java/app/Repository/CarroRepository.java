package app.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import app.Entity.Carro;

public interface CarroRepository extends JpaRepository<Carro, Long> {

}
