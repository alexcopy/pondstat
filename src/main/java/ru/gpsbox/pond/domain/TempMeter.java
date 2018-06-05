package ru.gpsbox.pond.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.Document;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.Objects;

/**
 * A TempMeter.
 */
@Document(collection = "temp_meter")
@org.springframework.data.elasticsearch.annotations.Document(indexName = "tempmeter")
public class TempMeter implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @Field("reading_date")
    private ZonedDateTime readingDate;

    @NotNull
    @Field("temp_val")
    private Double tempVal;

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

    public ZonedDateTime getReadingDate() {
        return readingDate;
    }

    public TempMeter readingDate(ZonedDateTime readingDate) {
        this.readingDate = readingDate;
        return this;
    }

    public void setReadingDate(ZonedDateTime readingDate) {
        this.readingDate = readingDate;
    }

    public Double getTempVal() {
        return tempVal;
    }

    public TempMeter tempVal(Double tempVal) {
        this.tempVal = tempVal;
        return this;
    }

    public void setTempVal(Double tempVal) {
        this.tempVal = tempVal;
    }

    public Integer getTimestamp() {
        return timestamp;
    }

    public TempMeter timestamp(Integer timestamp) {
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
        TempMeter tempMeter = (TempMeter) o;
        if (tempMeter.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), tempMeter.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "TempMeter{" +
            "id=" + getId() +
            ", readingDate='" + getReadingDate() + "'" +
            ", tempVal=" + getTempVal() +
            ", timestamp=" + getTimestamp() +
            "}";
    }
}
