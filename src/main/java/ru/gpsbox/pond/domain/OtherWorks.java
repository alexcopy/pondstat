package ru.gpsbox.pond.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.Document;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.Objects;

/**
 * A OtherWorks.
 */
@Document(collection = "other_works")
@org.springframework.data.elasticsearch.annotations.Document(indexName = "otherworks")
public class OtherWorks implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @NotNull
    @Field("date")
    private ZonedDateTime date;

    @Field("reason")
    private String reason;

    @Field("qty")
    private Integer qty;

    @Field("descripton")
    private String descripton;

    @NotNull
    @Field("temp_val")
    private Double tempVal;

    @Field("timestamp")
    private Integer timestamp;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public ZonedDateTime getDate() {
        return date;
    }

    public OtherWorks date(ZonedDateTime date) {
        this.date = date;
        return this;
    }

    public void setDate(ZonedDateTime date) {
        this.date = date;
    }

    public String getReason() {
        return reason;
    }

    public OtherWorks reason(String reason) {
        this.reason = reason;
        return this;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public Integer getQty() {
        return qty;
    }

    public OtherWorks qty(Integer qty) {
        this.qty = qty;
        return this;
    }

    public void setQty(Integer qty) {
        this.qty = qty;
    }

    public String getDescripton() {
        return descripton;
    }

    public OtherWorks descripton(String descripton) {
        this.descripton = descripton;
        return this;
    }

    public void setDescripton(String descripton) {
        this.descripton = descripton;
    }

    public Double getTempVal() {
        return tempVal;
    }

    public OtherWorks tempVal(Double tempVal) {
        this.tempVal = tempVal;
        return this;
    }

    public void setTempVal(Double tempVal) {
        this.tempVal = tempVal;
    }

    public Integer getTimestamp() {
        return timestamp;
    }

    public OtherWorks timestamp(Integer timestamp) {
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
        OtherWorks otherWorks = (OtherWorks) o;
        if (otherWorks.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), otherWorks.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "OtherWorks{" +
            "id=" + getId() +
            ", date='" + getDate() + "'" +
            ", reason='" + getReason() + "'" +
            ", qty=" + getQty() +
            ", descripton='" + getDescripton() + "'" +
            ", tempVal=" + getTempVal() +
            ", timestamp=" + getTimestamp() +
            "}";
    }
}
