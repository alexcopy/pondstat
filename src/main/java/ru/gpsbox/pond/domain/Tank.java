package ru.gpsbox.pond.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.Document;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.util.Objects;

import ru.gpsbox.pond.domain.enumeration.TankType;

/**
 * A Tank.
 */
@Document(collection = "tank")
@org.springframework.data.elasticsearch.annotations.Document(indexName = "tank")
public class Tank implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @NotNull
    @Field("tank_name")
    private String tankName;

    @NotNull
    @Field("tank_type")
    private TankType tankType;

    @Field("description")
    private String description;

    @NotNull
    @Field("timestamp")
    private Integer timestamp;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTankName() {
        return tankName;
    }

    public Tank tankName(String tankName) {
        this.tankName = tankName;
        return this;
    }

    public void setTankName(String tankName) {
        this.tankName = tankName;
    }

    public TankType getTankType() {
        return tankType;
    }

    public Tank tankType(TankType tankType) {
        this.tankType = tankType;
        return this;
    }

    public void setTankType(TankType tankType) {
        this.tankType = tankType;
    }

    public String getDescription() {
        return description;
    }

    public Tank description(String description) {
        this.description = description;
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getTimestamp() {
        return timestamp;
    }

    public Tank timestamp(Integer timestamp) {
        this.timestamp = timestamp;
        return this;
    }

    public void setTimestamp(Integer timestamp) {
        this.timestamp = timestamp;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Tank tank = (Tank) o;
        if (tank.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), tank.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Tank{" +
            "id=" + getId() +
            ", tankName='" + getTankName() + "'" +
            ", tankType='" + getTankType() + "'" +
            ", description='" + getDescription() + "'" +
            ", timestamp=" + getTimestamp() +
            "}";
    }
}
